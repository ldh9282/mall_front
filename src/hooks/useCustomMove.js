import { useCallback } from "react";
import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom";

const getNum = (param, defaultValue) => {
    if (!param) {
        return defaultValue;
    }

    return parseInt(param);
}

const useCustomMove = () => {
    const navigate = useNavigate();
    const [queryParams] = useSearchParams();

    
    const page = getNum(queryParams.get("page"), 1);
    const size = getNum(queryParams.get("size"), 10);
    
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


    return { moveToList, moveToModify, page, size };

    
}

export default useCustomMove;