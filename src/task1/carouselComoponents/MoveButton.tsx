import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import {css} from "@emotion/css";
import Button from '@mui/material/Button';

type Dir = "right" | "left";

type MoveButtonProps = {
    direction: Dir,
    onClick: () => void
}

const symbols = css({
    fontSize: '30px'
})

const MoveButton = ({direction,onClick}: MoveButtonProps) =>
    <Button variant="contained" onClick={onClick} >
        {direction==="right"?<ArrowForwardIosIcon />:<ArrowBackIosNewIcon />}
    </Button>
export default MoveButton