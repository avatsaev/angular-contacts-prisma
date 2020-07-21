import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};



export type Contact = {
  __typename?: 'Contact';
  id: Scalars['Int'];
  name: Scalars['String'];
  email: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
};

export type ContactCreateInput = {
  email: Scalars['String'];
  name: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
};

export type ContactUpdateInput = {
  id?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
};

export type ContactWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createOneContact: Contact;
  deleteOneContact?: Maybe<Contact>;
  updateOneContact?: Maybe<Contact>;
};


export type MutationCreateOneContactArgs = {
  data: ContactCreateInput;
};


export type MutationDeleteOneContactArgs = {
  where: ContactWhereUniqueInput;
};


export type MutationUpdateOneContactArgs = {
  data: ContactUpdateInput;
  where: ContactWhereUniqueInput;
};

export type Query = {
  __typename?: 'Query';
  contact?: Maybe<Contact>;
  contacts: Array<Contact>;
  searchContacts: Array<Contact>;
};


export type QueryContactArgs = {
  where: ContactWhereUniqueInput;
};


export type QueryContactsArgs = {
  skip?: Maybe<Scalars['Int']>;
};


export type QuerySearchContactsArgs = {
  queryString?: Maybe<Scalars['String']>;
};

export type ContactFlatFragment = (
  { __typename?: 'Contact' }
  & Pick<Contact, 'id' | 'name' | 'email' | 'phone'>
);

export type GetAllContactsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllContactsQuery = (
  { __typename?: 'Query' }
  & { contacts: Array<(
    { __typename?: 'Contact' }
    & ContactFlatFragment
  )> }
);

export const ContactFlatFragmentDoc = gql`
    fragment ContactFlat on Contact {
  id
  name
  email
  phone
}
    `;
export const GetAllContactsDocument = gql`
    query getAllContacts {
  contacts {
    ...ContactFlat
  }
}
    ${ContactFlatFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetAllContactsGQL extends Apollo.Query<GetAllContactsQuery, GetAllContactsQueryVariables> {
    document = GetAllContactsDocument;
    
  }