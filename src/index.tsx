import React    from 'react';
import {render} from 'react-dom';
import App      from './App';
import {BrowserRouter} from 'react-router-dom'

export async function main() {
    render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('root'))

}

main().catch(console.error);
