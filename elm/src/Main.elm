module Main exposing (..)
import Experience exposing (..)
import Salary exposing (..)
import SalaryCoefficient exposing (..)

import Html

main =
  salary (Years 30) (Percent 15)
  |> salaryToString
  |> Html.text


baseSalary : Experience -> Salary
baseSalary experience =
    if biggerThanOrEqual experience (Years 10) then
        K 38

    else if biggerThanOrEqual experience (Years 5) then
        K 34

    else
        K 30

salary : Experience -> SalaryCoefficient -> Salary
salary experience coefficient =
    baseSalary experience
    |> apply coefficient
