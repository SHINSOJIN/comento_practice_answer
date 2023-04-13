import {Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const KeywordSearch = ({changeTitle, changeContext, context, title, stockClick, getSampleData,}) => {

    const moveToSearch = () => {
      window.open('/search', '_blank', 'width=515,height=860,top=250,left=500,location=no,status=no,resizable=no,scrollbars=no, popup');
        //TODO: 제목, 본문 변경 함수 작성
    }

    return (
        <Button variant="contained" onClick={moveToSearch}>
            뉴스 직접 선택<SearchIcon sx={{margin: '0 4px'}}/>
        </Button>
    );
};

export default KeywordSearch;
