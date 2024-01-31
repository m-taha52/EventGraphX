// ====== USER PARAMS
export type CreateUserParams = {
    clerkId: string
    firstName: string
    lastName: string
    username: string
    email: string
    phone: string
    photo: string
  }

  export type UpdateUserParams = {
    firstName: string
    lastName: string
    username: string
    photo: string
  }

  // ====== CATEGORY PARAMS
export type CreateCategoryParams = {
  categoryName: string
}

export type CreateEventParams = {
  userId: string
  event: {
    title: string
    description: string
    location: string
    imageUrl: string
    startDateTime: Date
    endDateTime: Date
    categoryId: string
    price: string
    isFree: boolean
    url: string
  }
  path: string
}

export type SearchParamProps = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}