/**
 * Created by marno on 2017/2/4
 * Function:为了兼容Android和iOS设置统一程序入口
 * Desc:
 */
import React, {Component} from "react";
import {AppRegistry} from "react-native";
import InitApp from "./pages/home/InitApp";

AppRegistry.registerComponent('Eyepetizer', ()=>InitApp);