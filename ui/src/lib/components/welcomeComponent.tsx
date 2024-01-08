import Button, {ButtonStyle} from "./buttons/Button";
import Card, {CardStyle} from "./cards/Card";
import Navbar from "./Navbar";

type Props = {}
export default function WelcomeComponent(props: Props) {

  return (
    <div>
        <Navbar/>
        <div className={'flex flex-col justify-center items-center gap-3'}>
            <Card
                card_style={CardStyle.Primary}
                gradient={true}
                label={"hello"}
            >
                <div className={'flex flex-col gap-3'}>
                    <Button
                        label={'Click me'}
                        onClick={() => console.log('Oi')}
                        button_style={ButtonStyle.Primary}
                    />
                    <Button
                        label={'Click me'}
                        onClick={() => console.log('Oi')}
                        button_style={ButtonStyle.Warning}
                    />
                    <Button
                        label={'Click me'}
                        onClick={() => console.log('Oi')}
                        button_style={ButtonStyle.Danger}
                    />
                </div>
                <div className={'flex flex-col gap-3'}>
                    <Button
                        label={'Click me'}
                        onClick={() => console.log('Oi')}
                        button_style={ButtonStyle.Primary}
                    />
                    <Button
                        label={'Click me'}
                        onClick={() => console.log('Oi')}
                        button_style={ButtonStyle.Warning}
                    />
                    <Button
                        label={'Click me'}
                        onClick={() => console.log('Oi')}
                        button_style={ButtonStyle.Danger}
                    />
                </div>

            </Card>
            <Card
                card_style={CardStyle.Warning}
            >
                <Button
                    label={'Click me'}
                    onClick={() => console.log('Oi')}
                    button_style={ButtonStyle.Primary}
                />
                <Button
                    label={'Click me'}
                    onClick={() => console.log('Oi')}
                    button_style={ButtonStyle.Warning}
                />
                <Button
                    label={'Click me'}
                    onClick={() => console.log('Oi')}
                    button_style={ButtonStyle.Danger}
                />
            </Card>
            <Card
                card_style={CardStyle.Danger}
            >
                <Button
                    label={'Click me'}
                    onClick={() => console.log('Oi')}
                    button_style={ButtonStyle.Primary}
                />
                <Button
                    label={'Click me'}
                    onClick={() => console.log('Oi')}
                    button_style={ButtonStyle.Warning}
                />
                <Button
                    label={'Click me'}
                    onClick={() => console.log('Oi')}
                    button_style={ButtonStyle.Danger}
                />
            </Card>
            <Card
                card_style={CardStyle.Secondary}
            >
                <div className={'flex flex-col gap-3'}>
                    <Button
                        label={'Click me'}
                        onClick={() => console.log('Oi')}
                        button_style={ButtonStyle.Primary}
                    />
                    <Button
                        label={'Click me'}
                        onClick={() => console.log('Oi')}
                        button_style={ButtonStyle.Warning}
                    />
                    <Button
                        label={'Click me'}
                        onClick={() => console.log('Oi')}
                        button_style={ButtonStyle.Secondary}
                    />
                </div>
            </Card>
        </div>
    </div>
  )
}
