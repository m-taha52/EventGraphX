import Collection from '@/components/shared/Collection'
import { Button } from '@/components/ui/button'
import { getEventsByUser } from '@/lib/actions/event.actions'
import { auth } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

const ProfilePage = async () => {
    const { sessionClaims } = auth();
    const userId = sessionClaims?.userId as string;

    const organizedEvents = await getEventsByUser({userId, page: 1});

  return (
    <>
        {/* My Tickets */}
        <section className='bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10'>
            <div className='wrapper flex items-center justify-center sm:justify-between'>
                <h3 className='h3-bold text-center sm:text-left'> My Tickets </h3>
                <Button asChild size='lg' className='hidden sm:flex'>
                    <Link href="/#events">
                    Explore More Events
                    </Link>
                </Button>
            </div>
        </section>

        {/* <section className='wrapper my-8'>
        <Collection 
          data={relatedEvents?.data}
          emptyTitle="No Event Tickets Purchased Yet"
          emptyStateSubtext="No Worries - Plenty of Events to explore"
          collectionType='My_Tickets'
          Limit={3}
          page={1}
          urlParamName='ordersPage'
          totalPages={2}
        />
        </section> */}

        {/* Events Organized */}

        <section className='bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10'>
            <div className='wrapper flex items-center justify-center sm:justify-between'>
                <h3 className='h3-bold text-center sm:text-left'> Events Organized </h3>
                <Button asChild size="lg" className=' hidden sm:flex'>
                    <Link href="/events/create">
                    Create New Events
                    </Link>
                </Button>
            </div>
        </section>

        <section className='wrapper my-8'>
        <Collection 
          data={organizedEvents?.data}
          emptyTitle="No Events have been created Yet"
          emptyStateSubtext="Go create some now"
          collectionType='Events_Organized'
          Limit={6}
          page={1}
          urlParamName='eventsPage'
          totalPages={2}
        />
        </section>
    </>
  )
}

export default ProfilePage