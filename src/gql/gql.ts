/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "fragment CollectionDetail on Collection {\n  name\n  description\n}": types.CollectionDetailFragmentDoc,
    "fragment CollectionListItem on Collection {\n  id\n  name\n  slug\n  image {\n    url\n  }\n}": types.CollectionListItemFragmentDoc,
    "query CollectionsGetBySlug($slug: String!) {\n  collections(where: {slug: $slug}) {\n    ...CollectionDetail\n  }\n}": types.CollectionsGetBySlugDocument,
    "query CollectionsGetList {\n  collections {\n    ...CollectionListItem\n  }\n}": types.CollectionsGetListDocument,
    "fragment ProductDetail on Product {\n  id\n  name\n  description\n  collections(first: 1) {\n    slug\n  }\n  categories(first: 1) {\n    name\n    slug\n  }\n  images(first: 1) {\n    url\n  }\n  price\n  variants {\n    ... on ProductColorVariant {\n      __typename\n      name\n    }\n    ... on ProductSizeVariant {\n      __typename\n      name\n    }\n  }\n}": types.ProductDetailFragmentDoc,
    "query ProductGetById($id: ID!) {\n  product(where: {id: $id}) {\n    ...ProductDetail\n  }\n}": types.ProductGetByIdDocument,
    "fragment ProductListItem on Product {\n  id\n  name\n  description\n  categories(first: 1) {\n    name\n  }\n  images(first: 1) {\n    url\n  }\n  price\n}": types.ProductListItemFragmentDoc,
    "query ProductsGetAllCount {\n  productsConnection {\n    aggregate {\n      count\n    }\n  }\n}": types.ProductsGetAllCountDocument,
    "query ProductsGetByCategorySlug($slug: String!, $productsPerPage: Int!, $offset: Int!) {\n  products(\n    first: $productsPerPage\n    where: {categories_some: {slug: $slug}}\n    skip: $offset\n  ) {\n    ...ProductListItem\n  }\n}": types.ProductsGetByCategorySlugDocument,
    "query ProductsGetByCollectionSlug($slug: String!) {\n  products(where: {collections_some: {slug: $slug}}) {\n    ...ProductListItem\n  }\n}": types.ProductsGetByCollectionSlugDocument,
    "query ProductsGetBySearchQuery($query: String!) {\n  products(where: {name_contains: $query}) {\n    ...ProductListItem\n  }\n}": types.ProductsGetBySearchQueryDocument,
    "query ProductsGetCountByCategory($categorySlug: String = \"\") {\n  productsConnection(where: {categories_some: {slug: $categorySlug}}) {\n    aggregate {\n      count\n    }\n  }\n}": types.ProductsGetCountByCategoryDocument,
    "query ProductsGetList($productsPerPage: Int!, $offset: Int!) {\n  products(first: $productsPerPage, skip: $offset) {\n    ...ProductListItem\n  }\n}": types.ProductsGetListDocument,
    "query ProductsGetRelated($categorySlug: String!, $collectionSlug: String!) {\n  products(\n    first: 4\n    where: {OR: [{categories_some: {slug: $categorySlug}}, {collections_some: {slug: $collectionSlug}}]}\n  ) {\n    ...ProductListItem\n  }\n}": types.ProductsGetRelatedDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CollectionDetail on Collection {\n  name\n  description\n}"): typeof import('./graphql').CollectionDetailFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CollectionListItem on Collection {\n  id\n  name\n  slug\n  image {\n    url\n  }\n}"): typeof import('./graphql').CollectionListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionsGetBySlug($slug: String!) {\n  collections(where: {slug: $slug}) {\n    ...CollectionDetail\n  }\n}"): typeof import('./graphql').CollectionsGetBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionsGetList {\n  collections {\n    ...CollectionListItem\n  }\n}"): typeof import('./graphql').CollectionsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductDetail on Product {\n  id\n  name\n  description\n  collections(first: 1) {\n    slug\n  }\n  categories(first: 1) {\n    name\n    slug\n  }\n  images(first: 1) {\n    url\n  }\n  price\n  variants {\n    ... on ProductColorVariant {\n      __typename\n      name\n    }\n    ... on ProductSizeVariant {\n      __typename\n      name\n    }\n  }\n}"): typeof import('./graphql').ProductDetailFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetById($id: ID!) {\n  product(where: {id: $id}) {\n    ...ProductDetail\n  }\n}"): typeof import('./graphql').ProductGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductListItem on Product {\n  id\n  name\n  description\n  categories(first: 1) {\n    name\n  }\n  images(first: 1) {\n    url\n  }\n  price\n}"): typeof import('./graphql').ProductListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetAllCount {\n  productsConnection {\n    aggregate {\n      count\n    }\n  }\n}"): typeof import('./graphql').ProductsGetAllCountDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByCategorySlug($slug: String!, $productsPerPage: Int!, $offset: Int!) {\n  products(\n    first: $productsPerPage\n    where: {categories_some: {slug: $slug}}\n    skip: $offset\n  ) {\n    ...ProductListItem\n  }\n}"): typeof import('./graphql').ProductsGetByCategorySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByCollectionSlug($slug: String!) {\n  products(where: {collections_some: {slug: $slug}}) {\n    ...ProductListItem\n  }\n}"): typeof import('./graphql').ProductsGetByCollectionSlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetBySearchQuery($query: String!) {\n  products(where: {name_contains: $query}) {\n    ...ProductListItem\n  }\n}"): typeof import('./graphql').ProductsGetBySearchQueryDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetCountByCategory($categorySlug: String = \"\") {\n  productsConnection(where: {categories_some: {slug: $categorySlug}}) {\n    aggregate {\n      count\n    }\n  }\n}"): typeof import('./graphql').ProductsGetCountByCategoryDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList($productsPerPage: Int!, $offset: Int!) {\n  products(first: $productsPerPage, skip: $offset) {\n    ...ProductListItem\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetRelated($categorySlug: String!, $collectionSlug: String!) {\n  products(\n    first: 4\n    where: {OR: [{categories_some: {slug: $categorySlug}}, {collections_some: {slug: $collectionSlug}}]}\n  ) {\n    ...ProductListItem\n  }\n}"): typeof import('./graphql').ProductsGetRelatedDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
