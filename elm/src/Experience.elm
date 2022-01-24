module Experience exposing (..)


type Experience
    = Years Int


asYears : Experience -> Int
asYears experience =
    case experience of
        Years y ->
            y



xpToString : Experience -> String
xpToString experience =
    asYears experience
    |> String.fromInt
    |> (\xp -> xp ++ " years")



biggerThanOrEqual : Experience -> Experience -> Bool
biggerThanOrEqual a b =
    asYears a >= asYears b
