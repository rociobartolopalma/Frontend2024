import { Button } from "./Button"
export const ButtonsRow = ({row, buttonsFuctions}) => {
    return(
        <tr>

            {
                row.map((button) => {
                    return(
                    <Button 
                    key={button.label}
                    buttonsFunctions={buttonsFuctions}
                    {...button}/>
                    )
                })
            }
        </tr>
    )
}

ButtonsRow.propTypes = {
    row: 'array',
    buttonsFunctions: 'object'
}