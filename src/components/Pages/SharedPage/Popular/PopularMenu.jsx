
import SectionTitle from "../../../../component/SectionTitle/SectionTitle";
import MenuItem from "../MenuItem/MenuItem";
import useMenu from "../../../Hoks/useMenu";


const PopularMenu = () => {

  const [menu] = useMenu();
  const popular = menu.filter(item=>item.category==="popular");
    // const [menu, setMenu] = useState([])

    // useEffect(()=>{
    //     fetch('menu.json')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         const popularItems = data.filter(item=>item.category==="popular");
    //         setMenu(popularItems)})
        
    // },[])



    return (
      <section className="mb-12">
        <SectionTitle
           heading={'From Our Menu'}
           subHeading={'popular items'}
           ></SectionTitle> 

           <div className="grid md:grid-cols-2 gap-10">
            {
                popular?.map(item=><MenuItem
                     key={menu._id} 
                     item={item}
                     ></MenuItem>)
            }
           </div>
      </section>
       
    );
};

export default PopularMenu;