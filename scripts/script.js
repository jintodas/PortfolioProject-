function toggleState() {
  document.querySelector(".toggle-me").classList.toggle("active");
};
fetch('data/posts.json')
    .then(response => response.json())
    .then(data => console.log(data))
  

function createFilter(){
      var filterItems = ['a', 'b', 'c', 'd', 'e']
    }
    for (let i = 0, i < filterItems.length; i++){
    createFilterButton(filterItems[i]);
    }


    function filterPosts(){
      console.log("filter", filter);
    }
    function createFilterButton(filterItem){
      document.getElementById("filter").innerHTML  += ´
    
        <li>
           <button onclick="filterPosts(´${filterItems}')">
            ${filterItem}
          </button>
       </li>;
    }

    