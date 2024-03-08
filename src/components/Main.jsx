import CreateBtn from "./CreateBtn";
import DaysList from "./DaysList";
import DeleteModal from "./DeleteModal";
import ResetBtn from "./ResetBtn";
import CreateModal from "./CreateModal";


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
                <DaysList />
            </div>
        </main>
    )
}