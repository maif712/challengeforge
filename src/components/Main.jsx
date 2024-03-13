import CreateBtn from "./CreateBtn";
import DeleteModal from "./DeleteModal";
import ResetBtn from "./ResetBtn";
import CreateModal from "./CreateModal";
import ChallengesList from "./ChallengesList";
import ChallengeTitleList from "./ChallengeTitleList";


export default function Main() {
    return (
        <main>
            <div className="layout-wrapper">
                <div className="my-5 flex gap-4 items-center">
                    <CreateBtn />
                    <ResetBtn />
                    <CreateModal />
                    <DeleteModal />
                </div>
                <ChallengeTitleList />
                <ChallengesList />
            </div>
        </main>
    )
}