/**
 * Created by l e n o v o on 20.09.2019.
 */
class CocktailAPI {
    async getDrinksByName(name){
        const apiResponse = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);

        const cocktails = await apiResponse.json();

        return {
            cocktails
        }
    }

    async getDrinksByIngredient(ingredient){
        const apiResponse = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`);

        const cocktails = await apiResponse.json();

        return {
            cocktails
        }
    }

    async getSingleRecipe(id){
        const apiResponse = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);

        const recipe = await apiResponse.json();

        return {
            recipe
            }
    }


    async getCategories(){
        const apiResponse = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`);

        const categories = await apiResponse.json();

        return {
            categories
        }
    }

    async getDrinksByCategory(category){
        const apiResponse = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`);

        const cocktails = await apiResponse.json();

        return {
            cocktails
        }
    }

    async getDrinksByAlcohol(term){
        const apiResponse = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${term}`);

        const cocktails = await apiResponse.json();

        return {
            cocktails
        }
    }
}