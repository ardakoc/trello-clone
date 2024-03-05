import { Separator } from "@/components/ui/separator";
import { Info } from "../_components/info";

const ActivityPage = () => {
    return (
        <div className="w-full">
            <Info />
            <Separator className="my-4" />
            <p>Activity List</p>
        </div>
    )
}

export default ActivityPage;