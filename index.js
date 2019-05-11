$(function() {
  //test
  $("p").click(function() {
    $(this).remove();
  });

  //check

  $(".shopping-list").on("click", ".shopping-item-toggle", function(event) {
    $(this)
      .parent()
      .parent()
      .children(".shopping-item")
      .toggleClass("shopping-item__checked");
  });

  //delete item
  $(".shopping-list").on("click", ".shopping-item-delete", function(event) {
    $(this)
      .parent()
      .parent()
      .remove();
  });

  //add item
  $("#js-shopping-list-form").submit(event => {
    event.preventDefault();
    const userTextElement = $(event.currentTarget)
      .find("#shopping-list-entry")
      .val();

    let newItem = `
    <li>
        <span class="shopping-item">${userTextElement}</span>
        <div class="shopping-item-controls">
        <button class="shopping-item-toggle">
            <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete">
            <span class="button-label">delete</span>
        </button>
        </div>
    </li>`;

    $(".shopping-list").append(newItem);
    $(event.currentTarget)
      .find("#shopping-list-entry")
      .val("");
  });
});
