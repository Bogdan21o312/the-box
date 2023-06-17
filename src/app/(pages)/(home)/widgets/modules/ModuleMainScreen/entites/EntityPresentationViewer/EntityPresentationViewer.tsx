import classes from "./EntityPresentationViewer.module.scss"
import {IconArrow, Text, Button} from "@/shared";

export const EntityPresentationViewer = () => {
    return (
        <div className={classes.main}>
            <div className={classes.blockText}>
                <div className={classes.blockTextItem}>
                    <Text type={"title"} color={'white'} center>
                        Feature Projects
                    </Text>
                </div>
                <div className={classes.blockTextItem}>
                    <Text color={'white'} center>
                        The National University of Architecture
                    </Text>
                </div>
            </div>
            <div className={classes.buttons}>
                <Button iconLeft={<IconArrow/>} oneHundredPercentWidth>
                    Back
                </Button>
                <Button iconRight={<IconArrow/>} rotateIcon oneHundredPercentWidth>
                    Next
                </Button>
            </div>
        </div>
    )
}
