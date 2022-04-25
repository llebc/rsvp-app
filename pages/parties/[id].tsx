import { useRouter } from "next/router";
import Image from 'next/image';
import GuestCard from '../../components/guest-card';
import GuestSelection from '../../components/guest-selection';

const PartyInvitation = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div className="w-full h-screen flex items-center justify-center flex-col">
            <GuestSelection/>
            <p className="text-theme-gray uppercase tracking-widestest text-sm font-medium">The Webb Party</p>

            <h2 className="mt-4 text-2xl mb-6 font-header">Will you attend our special day?</h2>

            <Image className="mb-4" src="/images/divider.png" alt="Divider" height="11" width="96" />

            <div className="w-1/3 mt-4">
                <p className="text-theme-light-gray text-center font-light">It is with great honour that we invite you to share our special day. Please select a member of the party below to manage there preferences.</p>
            </div>

            <div className="mt-10 w-full px-60">
                <div className="grid grid-cols-2 gap-4">
                    <GuestCard/>
                    <GuestCard/>
                </div>
            </div>

        </div>
    )
}

export default PartyInvitation;