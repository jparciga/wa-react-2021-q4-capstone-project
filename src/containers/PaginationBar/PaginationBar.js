
import './PaginationBar.css'

const PaginationBar = ({pages}) => {
  let arrayPages=[];
  for(let i=0;i<pages;i++){
    arrayPages.push(1);
  }
  return (
<div class="pagination">
  <a href="#" class="active">&laquo;</a>
{arrayPages.map((element, i) => {
            return (
              <a href="#">{i+1}</a>
            );
          })}
  <a href="#">&raquo;</a>
</div>
  );
};

export default PaginationBar;
