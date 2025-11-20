import { GetSearch } from "@/lib/data";


export default async function Search({params}: {params: {searchSlug: string}}){
    const {searchSlug} = await params;

    const searchResults = await GetSearch(searchSlug);
}