

const handleClick = function (event) {  

  const itemsMenu = Array.from(event.target.parentNode.getElementsByTagName("li"))

  itemsMenu.map(item => item.classList.remove("active_type"))

  event.target.classList.add("active_type")

  var itemsAsides = Array.from(event.target.parentNode.parentNode.getElementsByTagName("ul"))

  itemsAsides = itemsAsides.filter(aside => aside.parentNode.tagName == "ARTICLE");;

  itemsAsides.map(aside => aside.classList.add("hidden_spec"))

  document.querySelector("ul#" + event.target.id).classList.remove("hidden_spec");

  var previews = Array.from(event.target.parentNode.parentNode.parentNode.getElementsByClassName("img_ctnr"));

  previews.map(preview => preview.classList.add("hidden_spec"));

  document.querySelector("div#" + event.target.id).classList.remove("hidden_spec");

  document.querySelector("div#" + event.target.id).style.opacity = 1;

}

var sections = Array.from(document.getElementsByTagName("main")[0].getElementsByTagName("section"));

var menus = sections.filter(section => section.getElementsByTagName("menu")[0]).map(section => section.getElementsByTagName("menu")[0]);

var items = menus.reduce((acc, menu) => [...acc, ...menu.getElementsByTagName("li")], []);

items.map(item => item.onclick = handleClick);