 import {calculadora} from "./funciones.js";
//  const fs = require('node:fs'); esto no funcionaria, porque en package.json hemos puesto "type": "module"
import fs from "node:fs";
fs.writeFileSync("test.txt", "Hoy es viernes", "utf-8");
// const express = require("express");
import express from 'express';

const app = express();

 console.log(calculadora(5,10,"sumar"));
 console.log(calculadora(5,10,"restar"));
