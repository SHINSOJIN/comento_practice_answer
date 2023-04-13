import {useState} from 'react';
import {Button, TextField, } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';

const KeywordSearch = ({changeTitle, changeContext, context, title, stockClick, getSampleData,}) => {

    // 키워드 검색 새창 열기
    const moveToSearch = () => {
      window.open('/search', '_blank', 'width=515,height=860,top=250,left=500,location=no,status=no,resizable=no,scrollbars=no, popup');
        window.setChildValue = (title, context) => {
            changeTitle(title);
            changeContext(context);
        }
    }

    return (
        <>

                <Button  variant="contained" onClick={moveToSearch} >
                    뉴스 직접 선택<SearchIcon sx={{margin:'0 4px'}}/>
                </Button>


            {/*<div className="inputWrapper">*/}
            {/*    <TextField*/}
            {/*        id="inputTitle"*/}
            {/*        placeholder="뉴스 제목"*/}
            {/*        sx={{width: '100%', border: 'none', borderBottom: '1px solid #cecece', '& fieldset': {border: 'none'}, '& input': {padding: '0 0 24px 0'},}}*/}
            {/*        value={title}*/}
            {/*        onChange={changeTitle}*/}
            {/*        disabled*/}
            {/*    />*/}
            {/*    <TextField*/}
            {/*        id="inputContext"*/}
            {/*        placeholder="뉴스 본문"*/}
            {/*        sx={{ width: '100%', border: 'none', '& fieldset': {border: 'none'}, '& div': {padding: '24px 0 0 0'}}}*/}
            {/*        multiline*/}
            {/*        rows={12}*/}
            {/*        value={context}*/}
            {/*        onChange={changeContext}*/}
            {/*        disabled*/}
            {/*    />*/}
            {/*</div>*/}

        </>
    );
};

export default KeywordSearch;
