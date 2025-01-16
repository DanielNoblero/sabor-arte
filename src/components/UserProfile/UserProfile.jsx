import React, { useState, useEffect } from 'react';
import { getAuth, updatePassword, reauthenticateWithCredential, EmailAuthProvider } from 'firebase/auth';
import { getFirestore, collection, getDocs, query, where, updateDoc } from 'firebase/firestore';
import { useTranslation } from 'react-i18next';
import '../css/signin.css';

const UserProfile = () => {
    const auth = getAuth();
    const db = getFirestore();
    const user = auth.currentUser;
    const { t, i18n } = useTranslation(); // Destructuring i18n también

    const [newPassword, setNewPassword] = useState('');
    const [currentPassword, setCurrentPassword] = useState('');
    const [purchaseHistory, setPurchaseHistory] = useState([]);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [nameError, setNameError] = useState('');
    const [nameSuccess, setNameSuccess] = useState('');

    useEffect(() => {
        const fetchPurchaseHistory = async () => {
            try {
                const purchasesRef = collection(db, 'purchases');
                const q = query(purchasesRef, where('userId', '==', user.uid));
                const querySnapshot = await getDocs(q);
                const purchases = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setPurchaseHistory(purchases);
            } catch (err) {
                console.error('Error fetching purchase history:', err);
            }
        };

        const fetchUserProfile = async () => {
            if (user) {
                const userRef = collection(db, 'users');
                const userQuery = query(userRef, where('uid', '==', user.uid));
                const querySnapshot = await getDocs(userQuery);

                if (!querySnapshot.empty) {
                    const userData = querySnapshot.docs[0].data();
                    setFirstName(userData.firstName || '');
                    setLastName(userData.lastName || '');
                }
            }
        };

        if (user) {
            fetchPurchaseHistory();
            fetchUserProfile();
        }
    }, [user, db]);

    const handlePasswordChange = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (!currentPassword || !newPassword) {
            setError(t('errorPassword'));
            return;
        }

        try {
            const credential = EmailAuthProvider.credential(user.email, currentPassword);
            await reauthenticateWithCredential(user, credential);
            await updatePassword(user, newPassword);
            setSuccess(t('successPassword'));
        } catch (err) {
            setError(t('errorPassword'));
            console.error('Password change error:', err);
        }
    };

    const handleNameUpdate = async () => {
        setNameError('');
        setNameSuccess('');

        if (!firstName || !lastName) {
            setNameError(t('errorName'));
            return;
        }

        try {
            const userRef = collection(db, 'users');
            const userQuery = query(userRef, where('uid', '==', user.uid));
            const userSnapshot = await getDocs(userQuery);

            if (!userSnapshot.empty) {
                const userDoc = userSnapshot.docs[0];
                await updateDoc(userDoc.ref, {
                    firstName,
                    lastName
                });
                setNameSuccess(t('successName'));
            } else {
                setNameError(t('userNotFound'));
            }
        } catch (err) {
            setNameError(t('errorName'));
            console.error('Name update error:', err);
        }
    };

    return (
        <div className="signin2">
            <div className="wrapper2">
                <h1 className="signup-title">{t('profileTitle')}</h1>
                
                <section className="profile-details">
                    <h2>{t('userDetails')}</h2>
                    <p><strong>{t('email')}:</strong> {user?.email}</p>
                    <form >
                    <div className="input-box">
                        <label>{t('firstName')}</label>
                        <input
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div className="input-box">
                        <label>{t('lastName')}</label>
                        <input
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    <button type="button" onClick={handleNameUpdate} className="btn">{t('updateName')}</button>
                    </form>
                    {nameError && <p className="error-message">{nameError}</p>}
                    {nameSuccess && <p className="success-message">{nameSuccess}</p>}
                </section>

                <section className="change-password">
                    <h2>{t('changePassword')}</h2>
                    <form onSubmit={handlePasswordChange} >
                        <div className="input-box">
                            <label>{t('currentPassword')}</label>
                            <input
                                type="password"
                                value={currentPassword}
                                onChange={(e) => setCurrentPassword(e.target.value)}
                                required
                            />
                            <i className="bx bxs-lock-alt"></i>
                        </div>
                        
                        <div className="input-box">
                            <label>{t('newPassword')}</label>
                            <input
                                type="password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                required
                            />
                            <i className="bx bxs-lock-alt"></i>
                            
                        </div>
                        <button type="submit" className="btn">{t('updatePassword')}</button>
                    </form>
                    {error && <p className="error-message">{error}</p>}
                    {success && <p className="success-message">{success}</p>}
                </section>

                <section className="purchase-history">
                    <h2>{t('purchaseHistory')}</h2>
                    {purchaseHistory.length > 0 ? (
                        <ul>
                            {purchaseHistory.map((purchase) => (
                                <li key={purchase.id}>
                                    <p><strong>{t('date')}:</strong> {new Date(purchase.date).toLocaleDateString()}</p>
                                    <p><strong>{t('items')}:</strong> {purchase.items.map(item => item.name).join(', ')}</p>
                                    <p><strong>{t('total')}:</strong> ${purchase.total.toFixed(2)}</p>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>{t('noPurchases')}</p>
                    )}
                </section>
            </div>
        </div>
    );
};

export default UserProfile;
