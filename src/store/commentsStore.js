import { observable } from "mobx";
import fetchAPI from "../utils/fetch";

const commentsStore = observable({
  Data: [],
  Reply: [],

  fecthData() {
    fetchAPI("http://localhost:3000/data/comments.json").then(res => {
      this.addData(res.data.list);
      const a = res.data.list.map(el => el.replies);
      this.addReply(a);
    });
  },

  addData(data) {
    this.Data = data;
  },
  addReply(data) {
    this.Reply = data;
  }
});

export default commentsStore;
