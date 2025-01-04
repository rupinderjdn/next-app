import React from 'react';

type Params = Promise<{ slug?: string[] }>;

type SearchParams = Promise<{ sort?: string }>;

export default async function ProductPage({ params, searchParams }: { params: Params; searchParams : SearchParams }) {
  const { slug } = await params;
  const { sort } = await searchParams;
  return (
    <div>
      <h1>Product Page</h1>
      <p>Slug: {slug ? slug.join(', ') : 'No slug'}</p>
      <p>Sort: {sort ?? 'No sorting applied'}</p>
    </div>
  );
}
