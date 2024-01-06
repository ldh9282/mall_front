import { useSearchParams } from "react-router-dom"
import ListComponent from "../../components/todo/ListComponent";

const ListPage = () => {

    const [queryParams] = useSearchParams()
    const page = queryParams.get('page') ? queryParams.get('page') : 1
    const size = queryParams.get('size') ? queryParams.get('size') : 10
    
    return (
        <div className="p-4 w-full bg-orange-200 ">
            <div className="text-3xl font-extrabold">
                Todo List Page Component | page= {page} | size= {size}
            </div>

            <ListComponent />
        </div>
    );
}

export default ListPage;