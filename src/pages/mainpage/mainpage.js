import {
    ChannelsBar,
    MainPart,
    SecondSidebar
} from '../../components'


export default function MainPage() {
    return (
        <div className="flex text-center">
            <ChannelsBar />
            <SecondSidebar />
            <MainPart />
        </div>
    );
}
