import { HeartHandshake } from "lucide-react";
import K from "../../../constants";

const Services = () => {
    return (
        <div className="grid grid-cols-4 gap-x-2 mx-[10px] my-[10px]">
            {
                K.SERVICES.map((item, index) => {
                    return <div key={index} style={{backgroundColor: item.bgColor}}>
                        <span> <HeartHandshake/> </span>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                    </div>;
                })
            }
        </div>
    );
};

export default Services;