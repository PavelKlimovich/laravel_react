import Navigation from '@/Components/Navigation/Navigation';
import Header from '@/Components/Header/Header';

export default function Authenticated({ auth, header, children }) {
    return (
        <div >
            <Navigation auth={auth} />
            <Header header={header} />

            <main>{children}</main>
        </div>
    );
}
