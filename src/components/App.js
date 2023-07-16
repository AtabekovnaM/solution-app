import React from "react";
import Card from "./Card";
import movies from "../movies";


const App = () =>{
    return (
        <div>
            <h1 className="heading"> My movies</h1>
            <Card 
                name = {movies[0].name}
                src = {movies[0].src}
                liked = {movies[0].liked}
                year = {movies[0].year}
            />
            <Card 
                name = {movies[1].name}
                src = {movies[1].src}
                liked = {movies[1].liked}
                year = {movies[1].year}
            />
            <Card 
                name = {movies[2].name}
                src = {movies[2].src}
                liked = {movies[2].liked}
                year = {movies[2].year}
            />
        </div>
    );
};

export default App;