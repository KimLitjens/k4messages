import ChannelsBar from '../../components/channelsBar/channelsBar'
import SecondSidebar from '../../components/secondSidebar/secondSidebar'
import MainPart from '../../components/mainPart/mainPart'

export default function MainPage() {
    return (
        <div className="flex text-center">
            <ChannelsBar />
            <SecondSidebar />
            <MainPart />
        </div>
    );
}
