import {
  PlacesInTheCommunityArticle as BaseArticle,
  PlacesInTheCommunityArticleProps,
} from "@ukwehuwehneke/language-components";
import DATA_PLACES_IN_COMMUNITY from "~/data/module04/places-in-the-community";

export function PlacesInTheCommunityArticle(
  props: PlacesInTheCommunityArticleProps,
) {
  return <BaseArticle {...props} data={DATA_PLACES_IN_COMMUNITY} />;
}
