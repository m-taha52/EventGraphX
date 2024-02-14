'use client'

import { IEvent } from '@/lib/database/models/event.model'
import { SignedIn, SignedOut, useUser } from '@clerk/nextjs';
import React from 'react'
import { Button } from '../ui/button';
import Link from 'next/link';
import Checkout from './Checkout';

const CheckoutButton = ({event}: {event: IEvent}) => {
    const hasEventFinished = new Date(event.endDateTime) < new Date();
    const { user } = useUser();
    const userId = user?.publicMetadata.userId as string;
  return (
    <div className="flex items-center gap-3">
        {/* cannot buy past events */}
        {
            hasEventFinished ? (
                <p className='p-2 text-red-400'> Sorry, tickets are no longer available </p>
            ) : (
                <>
                    <SignedOut>
                        <Button asChild size="lg" className='button rounded-full'>
                            <Link href="/sign-in">
                                Get Tickets
                            </Link>
                        </Button>
                    </SignedOut>
                    
                    <SignedIn>
                        <Checkout event={event} userId={userId} />
                    </SignedIn>
                </>
            )

        }


    </div>
  )
}

export default CheckoutButton