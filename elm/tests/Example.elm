module Example exposing (..)

import Expect exposing (Expectation)
import Experience exposing (..)
import Salary exposing (..)
import SalaryCoefficient exposing (..)
import Test exposing (..)
import Main exposing (..)

-- coefficient : Random.Generator SalaryCoefficient
-- coefficient =
--     Random.int -20 20
--     |> Random.map Percent



suite : Test
suite =
    describe "World Company salary "
        [ describe "Base salary for "
            ([ ( Years 0, K 30 )
             , ( Years 4, K 30 )
             , ( Years 5, K 34 )
             , ( Years 9, K 34 )
             , ( Years 10, K 38 )
             ]
                |> List.map
                    (\( experience, expectedSalary ) ->
                        test ("an employee with " ++ xpToString experience ++ " of experience earns " ++ salaryToString expectedSalary) <|
                            \_ ->
                                experience
                                    |> baseSalary
                                    |> Expect.equal expectedSalary
                    )
            )
        , describe "fasfasgf "
            [ test "asfasf" <|
                \_ ->
                    salary (Years 0) (Percent 0)
                        |> Expect.equal (K 30)
            , test "asfasf2" <|
                \_ ->
                    salary (Years 0) (Percent 10)
                        |> Expect.equal (K 33)
            ]
        ]
