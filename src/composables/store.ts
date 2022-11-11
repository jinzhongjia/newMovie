import { defineStore } from "pinia";
import { computed, Ref, ref } from "vue";
import { get_json } from "./http";
import { Category } from "./type";
import { AllCategory_url } from "./base";

export const useCategoryStore = defineStore("counter", () => {
  const categories: Ref<Category[]> = ref([]);
  get_json(AllCategory_url, {}, (res: Category[]) => {
    categories.value = res;
  });

  function Id_to_name(id: number): string {
    for (const ele of categories.value) {
      if (ele.id === id) {
        return ele.name;
      }
    }
    return "";
  }

  function Name_to_id(name: string): number {
    for (const ele of categories.value) {
      if (ele.name == name) {
        return ele.id;
      }
    }
    return -1;
  }

  const AllCategory = computed(() => {
    return categories.value;
  });

  return { Id_to_name, Name_to_id, AllCategory };
});
