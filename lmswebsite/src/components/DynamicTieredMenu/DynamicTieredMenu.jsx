
import React from 'react';
import { MegaMenu } from 'primereact/megamenu';
import 'primereact/resources/themes/bootstrap4-light-blue/theme.css'; // Vela Green Theme
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

export default function DynamicTieredMenu() {
    const items = [


        {
            label: 'Electronics',
            icon: 'pi pi-mobile',
            items: [
                [
                    {
                        label: 'Computer',
                        items: [{ label: 'Monitor' }, { label: 'Mouse' }, { label: 'Notebook' }, { label: 'Keyboard' }, { label: 'Printer' }, { label: 'Storage' }]
                    }
                ],
                [
                    {
                        label: 'Home Theather',
                        items: [{ label: 'Projector' }, { label: 'Speakers' }, { label: 'TVs' }]
                    }
                ],
                [
                    {
                        label: 'Gaming',
                        items: [{ label: 'Accessories' }, { label: 'Console' }, { label: 'PC' }, { label: 'Video Games' }]
                    }
                ],
                [
                    {
                        label: 'Appliances',
                        items: [{ label: 'Coffee Machine' }, { label: 'Fridge' }, { label: 'Oven' }, { label: 'Vaccum Cleaner' }, { label: 'Washing Machine' }]
                    }
                ]
            ]
        },

    ];

    return (
        // <div className="card">
           
           
        // </div>
         <>
         <MegaMenu model={items} breakpoint="960px" />
         </>
    )
}
