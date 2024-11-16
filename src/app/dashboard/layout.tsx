import BaseLayOutTemplate from "@/components/templetes/BaseLayOutTemplate";

export default function Layout({children}:any){

    return (
        <BaseLayOutTemplate>
            {children}
        </BaseLayOutTemplate>
    )
}
