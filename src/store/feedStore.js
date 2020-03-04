import { observable } from "mobx";
import fetchAPI from "../utils/fetch";

const feedStore = observable({
  Data: [],

  fecthData() {
    fetchAPI("http://localhost:3000/data/data.json").then(res => {
      this.addData(res.data.list);
    });
  },

  addData(data) {
    this.Data = data;
  },

  addLike(id) {
    for (let i in this.Data) {
      if (parseInt(this.Data[i].id) === parseInt(id)) {
        const Data = this.Data[i];

        if (Data.like === undefined || !Data.like) {
          if (Data.likedCount === undefined) {
            Data.likedCount = 1;
            Data.like = true;
          } else {
            Data.likedCount = Data.likedCount + 1;
            Data.like = true;
          }
        } else {
          Data.likedCount = Data.likedCount - 1;
          Data.like = false;
        }
      }
    }
  }
});

export default feedStore;
