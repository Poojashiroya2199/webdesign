import { default as $ } from "./jq";
export function showDialog(task) {
  console.log(task);
  $(".dialog").text(task.description);
}
