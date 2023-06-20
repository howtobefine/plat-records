import { defineStore } from "pinia";
import { Toast } from "@/utils/toast.js"

const favoriteStore = defineStore("favoriteStore", {
    state: () => {
        return {
            myFavoriteList: JSON.parse(localStorage.getItem("myFavoriteList")) || [],
        };
    },
    actions: {
        toggleFavorite(product) {
            //
            const favoriteIndex = this.myFavoriteList.findIndex(
                (item) => item.id === product.id
            );
            // 如果找不到相符資料會回傳-1，就將資料新增
            if (favoriteIndex === -1) {
                this.myFavoriteList.push(product);
                Toast.fire({
                    icon: 'success',
                    title: '已加入我的最愛'
                })
            } else {
                // 如果有找到相符資料，就將資料刪除
                this.myFavoriteList.splice(favoriteIndex, 1);
                Toast.fire({
                    icon: 'success',
                    title: '已從我的最愛移除'
                })
            }
        },
        removeFavorite(index) {
            this.myFavoriteList.splice(index, 1);
            Toast.fire({
                icon: 'success',
                title: '已從我的最愛移除'
            })
            localStorage.setItem(
                "myFavoriteList",
                JSON.stringify(this.myFavoriteList)
            );
        },
        //判斷index用
        isFavorite(item) {
            return this.myFavoriteList.some((element) => element.id === item.id);
        },
    },
    // 定義要做深層監聽的屬性
    deep: ["myFavoriteList"],
});

export default favoriteStore;