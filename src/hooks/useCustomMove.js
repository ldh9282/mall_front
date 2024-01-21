import { useCallback, useState } from "react";
import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom";

const getNum = (param, defaultValue) => {
    if (!param) {
        return defaultValue;
    }

    return parseInt(param);
}

const useCustomMove = () => {
    const navigate = useNavigate();

    const [refresh, setRefresh] = useState(false);


    const [queryParams] = useSearchParams();

    
    
    let page = getNum(queryParams.get("page"), 1);
    let size = getNum(queryParams.get("size"), 10);
    
    const queryDefault = createSearchParams({ page, size }).toString();

    const moveToList = useCallback((pageParam) => {
        let queryStr = ""
        
        if (!pageParam) {
            const queryDefault = createSearchParams({ page, size }).toString();
            queryStr = queryDefault;
            
        } else {
            page = getNum(pageParam.page, 1);
            size = getNum(pageParam.size, 10);
            queryStr = createSearchParams({ page, size }).toString();
        }
        
        navigate({ pathname: `/todo/list`, search: queryStr });
        
    }, [page, size]);
    
    const moveToModify = useCallback((tno) => navigate({ pathname: `/todo/modify/${tno}` }), [page, size])

    const moveToRead = (num) => {
        console.log(queryDefault);
        navigate({
            pathname: `../read/${num}`,
            search: queryDefault,
        })
    }

    return { moveToList, moveToModify, moveToRead, page, size, refresh };

    
}

export default useCustomMove;