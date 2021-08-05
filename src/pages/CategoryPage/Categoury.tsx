import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./categoryPage.style.css";
import { CategoryData } from "../../Data/CategotyData";
import ItemSection from "../../components/item-section/ItemSection";
// material
import { makeStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TreeItem from "@material-ui/lab/TreeItem";

const useStyles = makeStyles({
  root: {
    height: 240,
    flexGrow: 1,
    maxWidth: 400,
  },
});

const Categoury = () => {
  const classes = useStyles();

  return (
    <>
      <div className="category-page-container d-flex">
        <div className="side-category text-right">
          <TreeView
            className={classes.root}
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
          >
            {CategoryData.map((item, index) => (
              <TreeItem nodeId={item.id} label={item.name}>
                {item.children?.map((itm, inx) => (
                  <TreeItem nodeId={itm.id} label={itm.name} />
                ))}
              </TreeItem>
            ))}
          </TreeView>
        </div>
        <div className="category-item-section-container w-100">
          <ItemSection header={"sadasd"}/>
        </div>
      </div>
    </>
  );
};

export default Categoury;
