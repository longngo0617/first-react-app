
const AccordionItem = ({title, des,info}) => {
  return (
    <div className="item__course">
      <div className="item__course--tt">
        <span className="day">{title}</span>
        <span className="details">{des}</span>
      </div>
      <div className="item__course--dropdown">
       {info}
      </div>
    </div>
  );
};

export default AccordionItem;
