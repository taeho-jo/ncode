import { observable } from "mobx";
import fetchAPI from "../utils/fetch";

const commentsStore = observable({
  Data: [],

  fecthData() {
    fetchAPI("http://localhost:3000/data/comments.json").then(res => {
      this.addData(res.data.list);
    });
  },

  addData(data) {
    this.Data = data;
  }
});

export default commentsStore;
