import {BiSolidDirections} from  'react-icons/bi'
import {FaMapMarkedAlt} from  'react-icons/fa'
import {GiBackpack} from  'react-icons/gi'

const AboutData = [
    {
        id: 1,
        title : "Voluptatem accusantium doloremque",
        desc : "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
        icon: (<BiSolidDirections size={35}/>)
    },
    {
        id: 2,
        title : "Organise with professional",
        desc : "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt",
        icon: (<FaMapMarkedAlt size={35}/>)
    },
    {
        id: 3,
        title : "Plan Adventure Guaranteed",
        desc : "Id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere",
        icon: (<GiBackpack size={35}/>)
    }
]

export default AboutData