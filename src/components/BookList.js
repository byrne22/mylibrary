import React, { useState, useEffect } from "react";
import "../App";
import { API_URL } from "../API";
import axios from "axios";
import { useAppContext } from "./context/appContext";
import { useNavigate } from "react-router-dom";