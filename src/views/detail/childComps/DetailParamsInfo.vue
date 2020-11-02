<template>
    <div  class="params-wrap" v-if="Object.keys(paramsInfo).length!==0">
        <div v-for="(item ,index) in paramsInfo.rule" class="params-info" :key="index">
            <div v-for="(list, index) in item" class="flex" :key="index">
                <div v-for="(listitem, index) in list" class="rule-list-item" :key="index">
                    {{listitem}}
                </div>
            </div>
        </div>
        <div v-for="(info, index) in paramsInfo.infos" :key="index" class="flex info-list-wrap">
            <div class="info-list-tit">{{info.key}}</div>
            <div class="info-text">{{info.value}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DetailParamsInfo",
        props:{
            paramsInfo:{
                type:Object,
                default(){
                    return{}
                }
            }
        }
    }
</script>

<style scoped>
    .params-wrap {

        border-top: 4px solid #ececec;
        border-bottom: 4px solid #ececec;
    }
    .rule-list-item {
        font-size: 12px;
        width: 20%;
        padding: 10px 4px;
    }
    .flex{
        width: 100%;
        border-bottom: 1px solid #ececec;
    }

    .info-list-wrap {
        font-size: 14px;;
        border-bottom: 1px solid #ececec;
        line-height: 20px;
    }

    .info-list-tit {
        width: 18%;
        padding: 10px 4px;
    }
    .info-text{
        width: 75%;
        color: var(--color-high-text);
        padding: 10px 4px;
    }

</style>